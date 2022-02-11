const baseUrl = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/events';

export const createEvent = (eventData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  });

export const fetchEventsList = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, { method: 'DELETE' }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
