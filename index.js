let cancel = document.getElementById('cancel');
let clear = document.getElementById('clear');
let enter = document.getElementById('enter');
document.addEventListener("click", function (enter) {
    alert('OK');
    });

    document.onclick = function() {
        div = Array.from(document.querySelectorAll('#clear'));
        div.forEach((e) => {
          e.onclick = function() {
            this.remove('');
          }
        });
      }
      document.onclick = function() {
        div = Array.from(document.querySelectorAll('#cansel'));
        div.forEach((e) => {
          e.onclick = function() {
            this.remove('');
          }
        });
      }

