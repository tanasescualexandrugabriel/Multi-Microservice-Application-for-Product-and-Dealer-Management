<!-- Add this code snippet to the product_all_dealers_price.html file to display all dealer prices -->
<label for="dealers">Select all dealers:</label>
<select id="dealers">
    <option value="all">All Dealers</option>
</select>

<script>
    document.getElementById('dealers').addEventListener('change', function() {
        const selectedOption = this.value;
        if (selectedOption === 'all') {
            fetch(dealerUrl)
                .then(response => response.json())
                .then(data => {
                    let prices = '';
                    data.forEach(dealer => {
                        prices += `<p>${dealer.name}: $${dealer.price}</p>`;
                    });
                    document.getElementById('price').innerHTML = prices;
                });
        }
    });
</script>
