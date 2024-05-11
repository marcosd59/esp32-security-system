from flask import Flask, Response, jsonify
import cv2
import face_recognition
import pickle
import base64

app = Flask(__name__)

# Cargamos los datos de reconocimiento facial
with open('D:\CARPETA_DE_EVIDENCIAS_SEMESTRE_8\esp32-security-system\src\server\encodings.pickle', 'rb') as f:
    data = pickle.load(f)

# Ruta de la API para obtener fotogramas de video con reconocimiento facial

@app.route('/api/frame')
def get_frame():
    video_capture = cv2.VideoCapture("http://192.168.1.252/video")
    ret, frame = video_capture.read()
    if not ret:
        return jsonify({"error": "Failed to capture video"}), 500

    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    boxes = face_recognition.face_locations(rgb, model='hog')
    encodings = face_recognition.face_encodings(rgb, boxes)

    names = []
    for encoding in encodings:
        matches = face_recognition.compare_faces(data['encodings'], encoding)
        name = 'Unknown'
        if True in matches:
            matchedIdxs = [i for (i, b) in enumerate(matches) if b]
            counts = {}
            for i in matchedIdxs:
                name = data['names'][i]
                counts[name] = counts.get(name, 0) + 1
            name = max(counts, key=counts.get)
        names.append(name)

    ret, buffer = cv2.imencode('.jpg', frame)
    frame_data = buffer.tobytes()
    frame_b64 = base64.b64encode(frame_data).decode("utf-8")

    return jsonify({"frame": frame_b64, "names": names})


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
