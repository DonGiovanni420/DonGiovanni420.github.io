

async function loadSpot() {
  const el = document.getElementById("spot-silver");
  const updated = document.getElementById("spot-silver-updated");

  try {
    const res = await fetch("/assets/data/spot.json", { cache: "no-store" });
    const data = await res.json();

    el.textContent = `$${Number(data.price).toFixed(2)}`;
    updated.textContent = `Updated: ${data.updated_utc} (UTC)`;
  } catch (e) {
    el.textContent = "-";
    if (updated) updated.textContent = "";
  }
}
loadSpot();
