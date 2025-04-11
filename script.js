const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
const cols = 10;
const bookedSeats = ['A1', 'B3', 'C5']; 

const seatMap = document.getElementById('seatMap');

rows.forEach(row => {
  for (let i = 1; i <= cols; i++) {
    const seatId = row + i;
    const seat = document.createElement('div');
    seat.className = 'seat';
    seat.textContent = seatId;
    seat.dataset.id = seatId;

    if (bookedSeats.includes(seatId)) {
      seat.classList.add('booked');
    }

    seat.addEventListener('click', () => {
      if (!seat.classList.contains('booked')) {
        seat.classList.toggle('selected');
      }
    });

    seatMap.appendChild(seat);
  }
});

function confirmBooking() {
  const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
    .map(seat => seat.dataset.id);
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat.');
  } else {
    alert('You have selected: ' + selectedSeats.join(', '));
  }
}
