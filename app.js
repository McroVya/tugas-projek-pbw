(function () {
  function updateClock() {
    const now = new Date();
    const date = document.getElementById('liveDate');
    const clock = document.getElementById('liveClock');
    const year = document.getElementById('yearNow');
    if (date) date.textContent = new Intl.DateTimeFormat('id-ID', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
    }).format(now);
    if (clock) clock.textContent = new Intl.DateTimeFormat('id-ID', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(now);
    if (year) year.textContent = now.getFullYear();
  }
  updateClock();
  setInterval(updateClock, 1000);

  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) toggle.addEventListener('click', () => sidebar.classList.toggle('open'));

  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        return;
      }
      event.preventDefault();
      if (form.id === 'loginForm') {
        window.location.href = 'dashboard.html';
        return;
      }
      if (form.classList.contains('demo-form')) {
        alert('Validasi berhasil. Karena ini versi statis, data tidak disimpan.');
        form.reset();
      }
    });
  });
})();
