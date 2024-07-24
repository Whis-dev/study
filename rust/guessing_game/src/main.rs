extern crate rand;

// NOTE: io 입출력 라이브러리를 스코프로 가져와야함. io 라이브러리는 std라고 불리는 표준 라이브러리에 있음
use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
	println!("Guess the number!");

	let secret_number = rand::thread_rng().gen_range(1, 101);

	println!("The secret number is: {}", secret_number);

	println!("Please input your guess.");

	let mut guess = String::new();

	io::stdin().read_line(&mut guess).expect("Failed to read line");

	// NOTE: 이전에 있던 값을 가는 것을 허용 -> 하나의 값을 현 타입에서 다른 타입으로 변환하고 싶은 경우 사용.
	// NOTE: u32 : 부호가 없는 32비트의 정수
	let guess: u32 = guess.trim().parse().expect("Please type a number!");

	println!("You guessed: {}", guess);

	match guess.cmp(&secret_number) {
		Ordering::Less    => println!("Too small!"),
		Ordering::Greater => println!("Too big!"),
		Ordering::Equal   => println!("You win!")
	}
}
