#Retrieve generic details about a node.
curl -i -X GET --url http://10.115.0.7:8001
curl -i -X GET --url http://10.115.0.7:8001/status
curl -i -X GET --url http://10.115.0.7:8001/apis/


#list of consumers
curl -i -X GET --url http://10.115.0.7:8001/consumers/
curl -i -X GET --url http://10.115.0.7:8001/consumers/57bed76fd5c2ca11004afdd4
curl -i -X GET --url http://10.115.0.7:8001/consumers/62f21639-a4ad-4f2e-a738-f3022645bca3

//id from the consumer, not apikey and not project id 
curl -i -X GET --url http://10.115.0.7:8001/consumers/3bd7ab15-ae06-4485-b8fc-46e58df3e50d

#delete consumers
curl -i -X DELETE --url http://10.115.0.7:8001/consumers/5ef9d39e-3e5c-4ec7-ac93-8edeed3a7c62

#create project
curl -X POST http://10.115.0.7:8001/consumers/ --data "username=57bed76fd5c2ca11004afdd4" --data "custom_id=57bed76fd5c2ca11004afdd4"

id -> 1a1b0517-83d4-465f-9f8c-54e49a1ad49c

#create key
curl -X POST http://10.115.0.7:8001/consumers/1a1b0517-83d4-465f-9f8c-54e49a1ad49c/key-auth --data ""

key -> c12fbbaac6084c578f34d37e6856d2ca

curl -X GET --header 'Accept: application/json' 'http://api.testrtc.com/v1s1/tests/5735ae56bcf6231100d8c36e?apikey=c12fbbaac6084c578f34d37e6856d2ca'