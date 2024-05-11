from flask import Flask, Response
import face_recognition
import cv2
import pickle

app = Flask(__name__)

with open('D:\CARPETA_DE_EVIDENCIAS_SEMESTRE_8\esp32-security-system\src\server\encodings.pickle', 'rb') as f:
    data = pickle.load(f)


def generate_frames():

    video_url = "http://192.168.1.252/video"
    video_capture = cv2.VideoCapture(video_url)

    while True:
        success, frame = video_capture.read()
        if not success:
            break
        else:
            rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            boxes = face_recognition.face_locations(rgb, model='hog')
            encodings = face_recognition.face_encodings(rgb, boxes)

            names = []
            for encoding in encodings:
                matches = face_recognition.compare_faces(
                    data['encodings'], encoding)
                name = 'Unknown'

                if True in matches:
                    matchedIdxs = [i for (i, b) in enumerate(matches) if b]
                    counts = {}

                    for i in matchedIdxs:
                        name = data['names'][i]
                        counts[name] = counts.get(name, 0) + 1

                    name = max(counts, key=counts.get)

                names.append(name)

            for ((top, right, bottom, left), name) in zip(boxes, names):
                cv2.rectangle(frame, (left, top),
                              (right, bottom), (0, 255, 0), 2)
                y = top - 15 if top - 15 > 15 else top + 15
                cv2.putText(frame, name, (left, y),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/video')
def video():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
