from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('topSuppliers');
    if exist == 1:
       result = pickle.loads(r.get('topSuppliers'));
       print(result);
    else:
        getDataframe();

topSuppliers = [];
query = 'select supplier_name, sum(iov_usd) as iov_usd from hotel_view group by supplier_name order by iov_usd desc limit 5';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tapro_atg').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection()
     cursor.execute(query);
     results = cursor.fetchall();
     for t in results:
         topSuppliers.append({
            t[0]: {
              'IOV': t[1],
            }
         });
     r = redis.StrictRedis(host='localhost', port=6379, db=0);
     pickled_object = pickle.dumps(topSuppliers);
     r.set('topSuppliers', pickled_object);
     print(json.dumps(topSuppliers));

checkForExistingKey();
