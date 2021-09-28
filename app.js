document.addEventListener('DOMContentLoaded', function (event) {
  let logs = 0
  let stones = 0
  let pickaxes = 0
  let autoChopper = 0
  let money = 0 //Testing purposes, remember to put this at 0 once you are ready to publish the game
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
    autoChopper++
    changeInventory()
    changeMarket()
  }

  document.getElementById('autoChopper10').onclick = function changeContent() {
    money -= autoChopperPrice * 10
    if (autoLogPlus == 0) {
      autoLogPlus = 10
    } else if (autoLogPlus >= 10) {
      autoLogPlus = autoLogPlus + 10
    } else {
      autoLogPlus + 10
    }

    if (autoChopper == 0) {
      autoChopper = 10
    } else if (autoChopper >= 10) {
      autoChopper = autoChopper + 10
    } else {
      autoChopper + 10
    }
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

    if (autoChopper > 0) {
      document.getElementById('autochopper').innerHTML = 'You now own ' + autoChopper + ' Auto Chopper(s)'
    } else {
      document.getElementById('autochopper').innerHTML = 'You now own ' + autoChopper + ' Auto Chopper(s)'
    }
  }

  function changeMarket() {
    if (logs > 0) {
      document.getElementById('sellAllLog').style.display = 'block'
    } else {
      document.getElementById('sellAllLog').style.display = 'none'
    }

    if (logs >= 1) {
      document.getElementById('sell1Log').style.display = 'block'
    } else {
      document.getElementById('sell1Log').style.display = 'none'
    }

    if (logs >= 10) {
      document.getElementById('sell10Log').style.display = 'block'
    } else {
      document.getElementById('sell10Log').style.display = 'none'
    }

    if (stones > 0) {
      document.getElementById('sellAllStone').style.display = 'block'
    } else {
      document.getElementById('sellAllStone').style.display = 'none'
    }

    if (stones >= 1) {
      document.getElementById('sell1Stone').style.display = 'block'
    } else {
      document.getElementById('sell1Stone').style.display = 'none'
    }

    if (stones >= 10) {
      document.getElementById('sell10Stone').style.display = 'block'
    } else {
      document.getElementById('sell10Stone').style.display = 'none'
    }

    if (money >= autoChopperPrice) {
      document.getElementById('autoChopper').style.display = 'block'
    } else {
      document.getElementById('autoChopper').style.display = 'none'
    }

    if (money >= autoChopperPrice * 10) {
      document.getElementById('autoChopper10').style.display = 'block'
    } else {
      document.getElementById('autoChopper10').style.display = 'none'
    }

    // if (money >= autoChopperPrice * autoChopper) {
    //   document.getElementById('autoChopperAll').style.display = 'block'
    // } else {
    //   document.getElementById('autoChopperAll').style.display = 'none'
    // }

    if (money >= pickaxePrice) {
      document.getElementById('buyPickaxe').style.display = 'block'
    } else {
      document.getElementById('buyPickaxe').style.display = 'none'
    }
  }

  // function switchMenu(menu) {
  //   let arr = Array.from(document.querySelectorAll('.menus > *'))
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i].style.display = 'block'
  //   }
  //   return menu
  // }

  //Above code seems to be working, a little bit at least. Need to figure out how to make it work properly though
  //Last piece of jQuery to be removed to make the code pure JS

  function switchMenu(menu) {
    $('.menus').children().css('display', 'none')
    $('.' + menu).css('display', 'block')
    return menu
  }
})
