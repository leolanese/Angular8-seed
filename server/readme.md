You can now send HTTP requests to the server just like any typical REST API server. Your server will be available from the  http://localhost:3000/  address.

These are the API endpoints we'll be able to use via our JSON REST API server:

GET /products  for getting the products
GET /products/<id>  for getting a single product by id
POST /products  for creating a new product
PUT /products/<id>  for updating a product by id
PATCH /products/<id>  for partially updating a product by id
DELETE /products/<id>  for deleting a product by id
You can use  _page  and  _limit  parameters to get paginated data. In the  Link header you'll get  first,  prev,  next  and  last  links.

Leave the JSON REST API server running and open a new command-line interface for typing the commands of the next steps.

