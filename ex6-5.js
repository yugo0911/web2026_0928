var who65 = 'world';

function sayhello65() {
  alert('Hello, ' + who65 + '!');
}

function came65() {
  alert(who65 + 'が来た');
}

function taro65() {
  who65 = '太郎';
  came65();
}

function hanako65() {
  who65 = '花子';
  came65();
}
