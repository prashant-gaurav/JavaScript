//Prime Number : a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1
const isPrime = (num) => {
    let divisor = 2;
    while (num > divisor) {
        if (num % divisor == 0) {
            return false;
        } else divisor++;
    }
    return true;
}
const data = isPrime(111);
console.log(data)
