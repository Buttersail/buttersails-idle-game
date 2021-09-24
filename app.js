document.addEventListener('DOMContentLoaded', function (event) {
  var logs = 0
  var stones = 0
  var pickaxes = 0
  var money = 0
  var logPlus = 1
  var stonePlus = 1
  var autoLogPlus = 0
  var autoChopperPrice = 100
  var pickaxePrice = 50
  var logPrice = 1
  var stonePrice = 5
  var menu

  setInterval(() => {
    logs += autoLogPlus
    changeInventory()
    changeMarket()
  }, 1000)

  function myFunction() {
    document.getElementById('#chop').click()
    logs += logPlus
    changeInventory()
    changeMarket()
  }
  // $('#chop').click(function () {
  //   logs += logPlus
  //   changeInventory()
  //   changeMarket()
  // })

  $('#mineStone').click(function () {
    if (pickaxes == 0) {
      alert('You have nothing to mine stone with!')
    } else {
      stones += stonePlus
      changeInventory()
    }
  })

  $('#sell1Log').click(function () {
    logs--
    money += logPrice
    changeInventory()
    changeMarket()
  })

  $('#sell10Log').click(function () {
    logs -= 10
    money += logPrice * 10
    changeInventory()
    changeMarket()
  })

  $('#sellAllLog').click(function () {
    money += logPrice * logs
    logs = 0
    changeInventory()
    changeMarket()
  })

  $('#autoChopper').click(function () {
    money -= autoChopperPrice
    autoLogPlus++
    changeInventory()
    changeMarket()
  })

  $('#buyPickaxe').click(function () {
    money -= pickaxePrice
    pickaxes++
    changeInventory()
    changeMarket()
  })

  $('#sell1Stone').click(function () {
    stones--
    money += stonePrice
    changeInventory()
    changeMarket()
  })

  $('#sell10Stone').click(function () {
    stones -= 10
    money += stonePrice * 10
    changeInventory()
    changeMarket()
  })

  $('#sellAllStone').click(function () {
    money += stonePrice * stones
    stones = 0
    changeInventory()
    changeMarket()
  })

  $('#visit').click(function () {
    menu = switchMenu('marketplace')
    changeMarket()
  })

  $('#return').click(function () {
    menu = switchMenu('main')
  })

  function changeInventory() {
    $('#money').html('Money: $' + money)

    if (logs == 1) {
      $('#logs').html('You now own ' + logs + ' log(s).')
    } else {
      $('#logs').html('You now own ' + logs + ' log(s).')
    }

    if (pickaxes > 0) {
      $('#pickaxes').html('You now own ' + pickaxes + ' pickaxe(s).')
    } else {
      $('#pickaxes').html('You now own ' + pickaxes + ' pickaxe(s).')
    }

    if (stones > 0) {
      $('#stone').html('You now own ' + stones + ' pieces of stone(s).')
    } else {
      $('#stone').html('You now own ' + stones + ' pieces of stone(s).')
    }
  }

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

  function switchMenu(menu) {
    $('.menus').children().css('display', 'none')
    $('.' + menu).css('display', 'block')
    return menu
  }
})
