document.addEventListener("DOMContentLoaded", function() {
  var audio = document.createElement('audio');
  audio.id = "background-music";
  audio.loop = true;
  audio.style.display = "none";

  var source = document.createElement('source');
  source.src = "https://dl.dropboxusercontent.com/scl/fi/seu58idknor1vdiugf7d4/The-Piano-Guys-All-of-Me.mp3?rlkey=hi9uwtg79xv7w5schuzyls4b6&st=cvisz7uk&dl=1";
  source.type = "audio/mpeg";

  audio.appendChild(source);
  document.body.appendChild(audio);

  // 자동 재생 시도
  audio.play().catch(function() {
    console.log("자동 재생이 차단되었습니다. 사용자가 상호작용할 때까지 대기합니다.");
  });

  // 재생 시간을 저장
  window.addEventListener("beforeunload", function() {
    localStorage.setItem("background-music-time", audio.currentTime);
  });

  // 저장된 시간으로 재생 위치 설정
  var savedTime = localStorage.getItem("background-music-time");
  if (savedTime !== null) {
    audio.currentTime = parseFloat(savedTime);
  }
});
