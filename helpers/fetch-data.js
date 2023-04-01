export default async function fetchData({ url, method = "GET" }) {
  const base_url = window.location.origin;
  const response = await fetch(`${base_url}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  if (response.ok) return jsonResponse;
  throw new Error(JSON.stringify(jsonResponse));
}
