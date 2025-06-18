try {
  const response = await fetch("https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8ad517f6f9mshfb7e8c9bdcfba3ep16f20cjsn3bdc8d2f7ef6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}