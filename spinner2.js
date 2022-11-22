const gif = ['\r|  ', '\r/  ', '\r- ', '\r\\ ', '\r|  '];

const spinner = (gif) => {
  let timer = 100;
  for (let spot of gif) {
    setTimeout(() => {
      process.stdout.write(spot);
    }, timer);
    timer += 200;
  }
};
spinner(gif);

