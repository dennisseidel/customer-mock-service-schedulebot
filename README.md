# Customer Mock Service for Schedule Bot

This Service Mock exposes an API that allow for the following **functions**: 

- searchCustomerById()
- searchCustomerByPhone()

The **Customer Object** contains the following Data: 

```json
{
  "_id": 1231233445,
  "name": "Mustermann",
  "surname": "Max",
  "phone": "01620001111",
  "email": "sample@dennisseidel.de",
  "centralagentid": 92323434, 
  "contracts": [
    {
     "id": "1232334",
     "type": "krankenversicherung",
     "notes": ["special things noted ....", "..."],
     "agentid": 12323434,
    },
    {
     "id": "1232334",
     "type": "krankenversicherung",
     "notes": ["special things noted ....", "..."],
     "agentid": 92323434,
    }
  ]
}
```