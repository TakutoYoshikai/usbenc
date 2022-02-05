# usbenc
The encryptor by any USB device. 

### ⚠ Warning!!! ⚠
It may be vulnerable from brute force attack and dictionary attack. I do not guarantee safety.

### Requirements
* Ubuntu 20.10
* Node.js
* libudev-dev
* build-essential

### Usage
**install**
```bash
npm install -g TakutoYoshikai/usbenc
```

**encrypt**
```bash
usbenc encrypt <FILE>
# insert a USB device.
```

**decrypt**
```bash
usbenc decrypt <ENCRYPTED FILE>
# insert a USB device.
```

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License
MIT License
