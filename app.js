document.addEventListener('DOMContentLoaded', function (event) {
  let logs = 0
  let stones = 0
  let pickaxes = 0
  let money = 0
  let logPlus = 1
  let stonePlus = 1
  let autoLogPlus = 0
  let autoChopperPrice = 100
  let pickaxePrice = 50
  let logPrice = 1
  let stonePrice = 5
  let menu

  setInterval(() => {
    logs += autoLogPlus
    changeInventory()
    changeMarket()
  }, 1000)

  document.getElementById('chop').onclick = function changeContent() {
    logs += logPlus
    changeInventory()
    changeMarket()
  }

  document.getElementById('mineStone').onclick = function changeContent() {
    if (pickaxes == 0) {
      alert('You have nothing to mine stone with!')
    } else {
      stones += stonePlus
      changeInventory()
    }
  }

  document.getElementById('sell1Log').onclick = function changeContent() {
    logs--
    money += logPrice
    changeInventory()
    changeMarket()
  }

  document.getElementById('sell10Log').onclick = function changeContent() {
    logs -= 10
    money += logPrice * 10
    changeInventory()
    changeMarket()
  }

  document.getElementById('sellAllLog').onclick = function changeContent() {
    money += logPrice * logs
    logs = 0
    changeInventory()
    changeMarket()
  }

  document.getElementById('autoChopper').onclick = function changeContent() {
    money -= autoChopperPrice
    autoLogPlus++
    changeInventory()
    changeMarket()
  }

  document.getElementById('buyPickaxe').onclick = function changeContent() {
    money -= pickaxePrice
    pickaxes++
    changeInventory()
    changeMarket()
  }

  document.getElementById('sell1Stone').onclick = function changeContent() {
    stones--
    money += stonePrice
    changeInventory()
    changeMarket()
  }

  document.getElementById('sell10Stone').onclick = function changeContent() {
    stones -= 10
    money += stonePrice * 10
    changeInventory()
    changeMarket()
  }

  document.getElementById('sellAllStone').onclick = function changeContent() {
    money += stonePrice * stones
    stones = 0
    changeInventory()
    changeMarket()
  }

  document.getElementById('visit').onclick = function changeContent() {
    menu = switchMenu('marketplace')
    changeMarket()
  }

  document.getElementById('return').onclick = function changeContent() {
    menu = switchMenu('main')
  }

  function changeInventory() {
    document.getElementById('money').innerHTML = 'Money: $' + money

    if (logs == 1) {
      document.getElementById('logs').innerHTML = 'You now own ' + logs + ' log(s).'
    } else {
      document.getElementById('logs').innerHTML = 'You now own ' + logs + ' log(s).'
    }

    if (pickaxes > 0) {
      document.getElementById('pickaxes').innerHTML = 'You now own ' + pickaxes + ' pickaxe(s).'
    } else {
      document.getElementById('pickaxes').innerHTML = 'You now own ' + pickaxes + ' pickaxe(s).'
    }

    if (stones > 0) {
      document.getElementById('stone').innerHTML = 'You now own ' + stones + ' pieces of stone(s).'
    } else {
      document.getElementById('stone').innerHTML = 'You now own ' + stones + ' pieces of stone(s).'
    }
  }

  // function changeMarket() {
  //   if (logs > 0) {
  //     document.getElementById('sellAllLog').style.display = 'block'
  //   } else {
  //     document.getElementById('sellAllLog').style.display = 'none'
  //   }
  // }

  function changeMarket() {
    if (logs > 0) {
      $('#sellAllLog').css('display', 'block')
    } else {
      $('#sellAllLog').css('display', 'none')
    }
    if (logs >= 1) {
      $('#sell1Log').css('display', 'block')
    } else {
      $('#sell1Log').css('display', 'none')
    }
    if (logs >= 10) {
      $('#sell10Log').css('display', 'block')
    } else {
      $('#sell10Log').css('display', 'none')
    }

    if (stones > 0) {
      $('#sellAllStone').css('display', 'block')
    } else {
      $('#sellAllStone').css('display', 'none')
    }
    if (stones >= 1) {
      $('#sell1Stone').css('display', 'block')
    } else {
      $('#sell1Stone').css('display', 'none')
    }
    if (stones >= 10) {
      $('#sell10Stone').css('display', 'block')
    } else {
      $('#sell10Stone').css('display', 'none')
    }

    if (money >= autoChopperPrice) {
      $('#autoChopper').css('display', 'block')
    } else {
      $('#autoChopper').css('display', 'none')
    }

    if (money >= pickaxePrice) {
      $('#buyPickaxe').css('display', 'block')
    } else {
      $('#buyPickaxe').css('display', 'none')
    }
  }

  // function switchMenu(menu) {
  //   document.getElementById('menus').style.display = 'none'
  //   document.getElementById('' + menu).style.display = 'block'
  //   return menu
  // }

  function switchMenu(menu) {
    $('.menus').children().css('display', 'none')
    $('.' + menu).css('display', 'block')
    return menu
  }
})
