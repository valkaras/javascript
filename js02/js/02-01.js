        let bools = prompt("true 또는 false 값을 입력하세요.");        
        let list = "";
        list += `<h2>논리연산자</h2><h3>입력하신 <mark>${bools}</mark> 에 대한 결과를 표로 나타내면</h3>`
        list += `<table><tr><th> && 연산 </th><th>연산</th><th> 값 </th><th>결과</th></tr>`;
        list += `<tr><td><mark>${bools}</mark></td><td>&&</td><td> false </td><td>${(false&&bools)}</td>`;
        list += `<tr><td><mark>${bools}</mark></td><td>&&</td><td> true </td><td>${(true&&bools)}</td>`;
        list += `<tr><th> || 연산 </th><th>연산</th><th>값 </th><th>결과</th></tr>`;
        list += `<tr><td><mark>${bools}</mark></td><td>||</td><td> false </td><td>${(false||bools)}</td>`;
        list += `<tr><td><mark>${bools}</mark></td><td>||</td><td> true </td><td>${(true||bools)}</td></table>`;
        document.write(list);