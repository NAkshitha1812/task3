function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} 😂 ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Failed to load joke. Try again!";
    });
}
