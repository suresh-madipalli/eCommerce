export const api = {
	getProducts() {
		return new Promise(async (resolve) => {
			try {
				const response = await fetch("http://localhost:8000/books");
				const data = await response.json();
				resolve(data);
			} catch (e) {
				console.log(e);
			}
		})
	}
}
