import { makeAutoObservable } from "mobx";

export default class NeededsStore {
	constructor() {
		this._neededs = [];
		// -- Заставляем класс следить за измененями. Если изменение произошло, класс говорить функциями, у которых есть observer, что произошло изменение, и функция перерендеривается
		makeAutoObservable(this);
	}

	setNeedes(neededs) {
		this._neededs = neededs;
	}

	get neededs() {
		return this._neededs;
	}
}
