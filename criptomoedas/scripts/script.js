let api = { key: /* insert api key - pro.coinmarketcap.com */}

        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + api.key)
            .then((res) => {
                if(!res.ok) throw new Error ('Error to execute request, status: ' + res.status);
                return res.json();
            })
            .then((api) => {
                
                let texto = ' ';
                for (let i = 0; i < 10; i++) {
                    let date = api.data[i].date_added;
                    let showDate = date.split("T");
                    let price = (api.data[i]['quote']['USD'].price).toFixed(2);
                    let percent = (api.data[i]['quote']['USD'].percent_change_24h).toFixed(2);

                    texto = texto + `
                    <tr>
                        <td>${api.data[i].name} (${api.data[i].symbol})</td>
                        <td>${showDate[0]}</td>
                        <td>US$ ${price}</td>
                        <td>${percent} %</td>
                    </tr>
                    `;
                    document.getElementById("coin").innerHTML = texto;
                }
                
            })
            .catch((error) => {
                console.error(error.message);
            })