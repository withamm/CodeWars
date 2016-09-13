"this" is a problem

Description:

We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe


//my solution 

//构造函数模式
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

//others solution

//普通模式
function NameMe(first, last) {
    return { 
      firstName : first,
      lastName : last,
      name: first + ' ' + last
   }
}

function NameMe(first, last) {
    
    return {name: first + ' ' + last , firstName:first, lastName:last};
}

//动态原型模式
function NameMe(first, last) {
  this.firstName = first
  this.lastName = last
}

NameMe.prototype = {
  get name() {
    return this.firstName + " " + this.lastName
  }
}

//下划线表示只能通过对象方法访问
function NameMe(first, last) {
    var _firstName = first;
    var _lastName = last;
    return {
      firstName: _firstName,
      lastName: _lastName,
      name: _firstName + ' ' + _lastName
    };
}

//可以使用Object.defineProperty创建一个不能被修改的对象的属性。
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    var name;
    Object.defineProperty(this, "name", {
      get: function() {return name;},
      set: function(val) {name = val;} 
    });
    this.name = this.firstName + ' ' + this.lastName;
}

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "firstName",{
       get: function() { return first;  }
    });
    Object.defineProperty(this, "lastName",{
       get: function() { return last;  }
    });
    Object.defineProperty(this, "name",{
       get: function() { return first+" "+last;  }
    });
    
    //return {name: this.firstName + ' ' + this.lastName};
}