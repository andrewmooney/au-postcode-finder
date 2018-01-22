use admin

db.runCommand({setFeatureCompatibilityVersion: "3.4"})

db.postcodes.createIndex( { suburb : 1 },
{ collation: {
    locale : 'en',
    strength : 2
  }
})

db.postcodes.createIndex( { state : 1 },
{ collation: {
    locale : 'en',
    strength : 2
  }
})

db.postcodes.createIndex( { stateCode : 1 },
  { collation: {
      locale : 'en',
      strength : 2
    }
  })
                           