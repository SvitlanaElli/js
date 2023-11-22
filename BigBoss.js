const company = {
  name: 'Велика Компанія',
  type:'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
      {
          name: 'Клієнт 1',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
              {
                  name: 'Клієнт 1.1',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
              },
              {
                  name: 'Клієнт 1.2',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
                  partners: [

                      {
                          name: 'Клієнт 1.2.3',
                          type: 'subSubCompany',
                          uses: 'Рішення для продажу квитків',
                          sells: 'Рішення для продажу квитків',
                      }
                  ]
              }
          ]
      },
      {
          name: 'Клієнт 2',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків'
      }
  ]
};

function findClientByName(clients, name){
  for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      if (client.name === name){
          return client;
      }
      if (client.partners) {
          return  findClientByName(client.partners, name);
      }
  }
}

function findValueByKey(companyName){
return findClientByName(company.clients, companyName);
}
console.log(findValueByKey('Клієнт 1.2.3'));