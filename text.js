function Randomtext() {
    let count=parseInt(document.getElementById("randomtext").value);
    for (var s=''; s.length < count; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.random()*62|0));
    document.getElementById("ans").innerHTML=s;
  }

  