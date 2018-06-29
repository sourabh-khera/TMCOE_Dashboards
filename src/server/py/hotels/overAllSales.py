from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


# def checkForExistingKey():
#     r = redis.StrictRedis(host='localhost', port=6379, db=0);
#     exist = r.exists('totalRecords');
#     if exist == 1:
#        print('true');
#     else:
#         getDataframe();

overAllSales = {};
queries = {
    'IOV': 'select sum(iov_usd) from hotel_view',
    'Number of Bookings':'select count(booking_id) from hotel_view',
    'Number of Rooms': 'select sum(room_count) from hotel_view',
    'Room Night': 'select sum(room_nights) from hotel_view',
    };
def createConnection():
     hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tapro_atg').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection()
     for i in queries:
         cursor.execute(queries[i]);
         result = cursor.fetchall();
         for t in result:
            overAllSales[i] = t[0];

     print(json.dumps(overAllSales));

getDataframe();
