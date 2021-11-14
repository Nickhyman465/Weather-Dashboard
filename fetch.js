class Fetch {
    async getCurrent(input) {
        const myKey = "91d8848622cd22a3ae5e44f28087f434";

        //Make request to URL
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );
        const data = await response.json();
        console.log(data);

        return data;
    }
}