class PaginationHelper {
    #collection;
    #itemsPerPage;

    /**
     * @constructor
     * @param {Array} collection - массив элементов
     * @param {number} itemsPerPage - целое число, указывающее, сколько
     *                         элементов умещаются на одной странице
     */
	constructor(collection, itemsPerPage) {
        this.#collection = [...collection];
        this.#itemsPerPage = itemsPerPage;
	}


    /**
     * @returns { number } - количество элементов во всей коллекции
     */
	itemCount() {
        return this.#collection.length;
	}


    /**
     * @returns { number } - количество страниц
     */
	pageCount() {
        let len = this.itemCount();
        if (len <= 0){
            return 0;
        }
        else if ((len > 0) && (len <= this.#itemsPerPage)){
            return 1;
        }
        else {
            let remainder = (len % this.#itemsPerPage === 0) ? 0 : 1;
            return ((len - (len % this.#itemsPerPage)) / this.#itemsPerPage) + remainder;
        }
	}


    /**
     * Возвращает количество элементов на текущей странице. 
     * page_index отсчитывается от нуля.
     * Этот метод должен возвращать -1 для значений pageIndex, 
     * выходящих за пределы допустимого диапазона
     * 
     * @param {number} pageIndex - номер страницы. 
     */
	pageItemCount(pageIndex) {
	
	}


    /**
     * Определяет, на какой странице находится элемент массива. 
     * Индексы читать с нуля.
     * Этот метод должен возвращать -1 для значений индекса элемента, 
     * выходящих за пределы допустимого диапазона
     * 
     * @param {*} itemIndex - элемент в массиве
     */
	pageIndex(itemIndex) {
	
	}
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const helper = new PaginationHelper(collection, 10);
print(helper);