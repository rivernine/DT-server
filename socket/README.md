# Digital Twin

### 공유 폴더 접근
```
\\10.81.134.225
ID: jgkang
PW: jgkang
```
---
|Tool|Version|
|:---:|:---:|
|Node.Js|10.16.3 LTS|
|Visual Studio|Community 2019|
|Python|2.7.16|
|Oracle Instant Client|19.3.0.0.0|
---
## 1. Node.js 설치

**[다운로드 링크](https://nodejs.org/ko/)**

---

## 2. Visual Studio 설치

**[다운로드 링크](https://visualstudio.microsoft.com/ko/downloads/)**

---

## 3. Python 설치

**[다운로드 링크](https://www.python.org/downloads/release/python-2716/)**

---

### 3.1. 환경변수 설정

Windows Menu -> 시스템 -> 시스템 정보 -> 환경변수 -> 시스템 변수 (편집)
```bash
# python.exe가 존재하는 경로, 스크립트 경로 추가
# ex) C:\Python\Python27\;
#     C:\Python\Python27\Scripts\;
```

### 3.2. 설치 확인

cmd -> python 입력

---

## 4. Orcale Instant Client 설치

**[다운로드 링크](https://www.oracle.com/database/technologies/instant-client/downloads.html)**

### 4.1. Basic, SDK 다운로드, 하나의 폴더에 압축 해제

```
ex) C:\Program Files\instantclient_19_3
```

### 4.2. 환경변수 설정
```
Path 추가: C:\Program Files\instantclient_19_3

시스템 변수 새로만들기: 
    - OCL_INC_DIR : C:\Program Files\instantclient_19_3\sdk\include
    - OCL_LIB_DIR : C:\Program Files\instantclient_19_3\sdk\lib\msvc
```

---

## 5. MongoDB 설치

mongo compass 불 필요