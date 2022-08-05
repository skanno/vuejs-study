// このクラスはimportできない
class ClassA {
	getName() {
		return 'Yes, ClassA';
	}
}

// このクラスはimportできる
export class ClassB {
	getName() {
		return 'Yes, ClassB';
	}
}

// このメソッドはimportできない
function funcA() {
	return 'Yes, funcA';
}

// このメソッドはimportできる
export function funcB() {
	return 'Yes, funcB';
}

// この変数はimportできない
const constA = 'Yes, ConstA';

// この変数はimportできる
export const constB = 'Yes, ConstB';