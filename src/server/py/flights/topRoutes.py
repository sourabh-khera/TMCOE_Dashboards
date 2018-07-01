from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('topRoutes');
    if exist == 1:
       result = pickle.loads(r.get('topRoutes'));
       print(result);
    else:
        getDataframe();

topRoutes = [];
query = 'select route, sum(iov) as iov, count(booking_id) as totalBookings, count(no_of_passengers) as totalPassengers from flight_kpi group by route order by iov desc limit 10';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tmp').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection();
     cursor.execute(query);
     results = cursor.fetchall();
     for t in results:
         topRoutes.append({
           t[0]: {
            'IOV': t[1],
            'TotalBookings': t[2],
            'TotalPassengers': t[3],
           }
         });
     data = json.dumps(topRoutes);
     r = redis.StrictRedis(host='localhost', port=6379, db=0);
     pickled_object = pickle.dumps(data);
     r.set('topRoutes', pickled_object);
     print(json.dumps(topRoutes));

checkForExistingKey();
