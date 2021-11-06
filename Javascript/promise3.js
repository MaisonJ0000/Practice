import _ from 'lodash';

const sayAndReturn = (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(word);
      resolve(word);
    }, 3000);
  });
};

const main = async () => {
  const jobs = [() => sayAndReturn('a'), () => sayAndReturn('b')];
  const result = await sayAndReturn('c');
  console.log(result);
  const results = await Promise.all(_.map(jobs, job => job()));
  console.log(results);
}

main();
