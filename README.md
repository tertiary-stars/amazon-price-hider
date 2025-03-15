# Amazon Price Hider

A Chrome extension that hides prices on Amazon to help reduce impulse buying. Includes a toggle button to enable or disable price hiding.

## Features
- Automatically hides all prices on Amazon.
- Toggle switch to enable/disable price hiding.
- Works on `www.amazon.com.br`. Further websites may be added by adding them in `manifest.json`s `matches` section.

## Installation
1. Download or clone this repository.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. The extension will appear in your browser toolbar.

## Usage
1. Click the **Amazon Price Hider** extension icon.
2. Use the **toggle switch** to hide or show prices.
3. Refresh the Amazon page for changes to take effect.

## Files
- `manifest.json` – Defines extension metadata and permissions.
- `popup.html` – UI for the toggle switch.
- `popup.js` – Handles the toggle switch logic.
- `background.js` – Listens for toggle state changes.
- `content.js` – Hides prices on Amazon pages.
- `icon.png` – Extension icon (optional).

## Notes
- If Amazon updates its website structure, price hiding may stop working.
- You can modify `content.js` to update the selectors if needed.

## License
MIT License – Free to use and modify.

