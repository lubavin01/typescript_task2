import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getSum(): number {
        return this._items.reduce((sum, current) => sum + current.price, 0);
    }

    getSumWithDiscount(discountPercent:number = 0): number {
        return this._items.reduce((sum, current) => sum + current.price*(100 - discountPercent)/100, 0);
    }

    deleteItem(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}