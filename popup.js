document.getElementById('open-tab-button').addEventListener('click',() => {
    const room=document.getElementById('url-input').value;
    if (room) {
        chrome.tabs.create({ url: `https://liveshare-1.onrender.com/${room}` });
    } else {
        alert('Please enter a valid URL');
    }
});
