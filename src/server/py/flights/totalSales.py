from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('totalSales');
    if exist == 1:
       result = pickle.loads(r.get('totalSales'));
       print(result);
    else:
        getDataframe();

totalSales = {};
query = 'select sum(iov) as iov ,sum(gbv) as gbv,sum(nbv) as nbv, sum(iov) / count(booking_id) as aov, count(booking_id) as totalBookings from flight_kpi';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tmp').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection();
     cursor.execute(query);
     result = cursor.fetchall();
     for t in result:
         totalSales = {
         'IOV / GBV': t[0],
         'NBV': t[2],
         'AOV': t[3],
         'Number of Bookings': t[4]
         };
     data = json.dumps(totalSales);
     r = redis.StrictRedis(host='localhost', port=6379, db=0);
     pickled_object = pickle.dumps(data);
     r.set('totalSales', pickled_object);
     print(json.dumps(totalSales));

checkForExistingKey();
