let typeofgame
let standar
let standard
let time_meter
let Temorayend = $('#end')
let Temoraystart = $('#start')
$('#end').remove()
function leftimage(series, seat) {
  this.name = series
  this.seat = seat
  this.appenddiv = function () {
    $('#puzzle').append('<div></div>')
    $('#puzzle').children('div:last').addClass('positionPicture')
    $('.positionPicture:last').css({
      'width': 500 / standard,
      'height': 500 / standard
    })
    $('.positionPicture:last').append('<div></div>')
    $('.positionPicture:last').children('div').addClass('leftimage')
    $('.leftimage:last').attr('draggable', 'true')
    $('.leftimage').css({
      'width': 500 / standard,
      'height': 500 / standard
    })
    $('.leftimage:last').data('position', this.seat)
    $('#puzzleDestination').append('<div></div>')
    $('#puzzleDestination').children('div:last').addClass('rightimage')
    $('.rightimage:last').addClass('rightimage' + this.seat)
    $('.rightimage').attr('draggable', 'false')
    $('.rightimage:last').css({
      'width': 500 / standard,
      'height': 500 / standard
    })
    this.judgeposition()
    this.leftimagedata()
  }
  this.judgeposition = function () {
    if (typeofgame == 1) {
      switch (this.seat) {
        case 1: $('.leftimage:last').css('background-position-x', 0)
          break
        case 2: $('.leftimage:last').css('background-position-x', -500 / 2)
          break
        case 3: $('.leftimage:last').css({ 'background-position-x': 0, 'background-position-y': -500 / 2 })
          break
        case 4: $('.leftimage:last').css({ 'background-position-x': -500 / 2, 'background-position-y': -500 / 2 })
          break
      }
    }
    if (typeofgame == 2) {
      switch (this.seat) {
        case 1: $('.leftimage:last').css('background-position-x', 0)
          break
        case 2: $('.leftimage:last').css('background-position-x', -500 / 3)
          break
        case 3: $('.leftimage:last').css('background-position-x', -500 / 3 * 2)
          break
        case 4: $('.leftimage:last').css({ 'background-position-x': 0, 'background-position-y': -500 / 3 })
          break
        case 5: $('.leftimage:last').css({ 'background-position-x': -500 / 3, 'background-position-y': -500 / 3 })
          break
        case 6: $('.leftimage:last').css({ 'background-position-x': -500 / 3 * 2, 'background-position-y': -500 / 3 })
          break
        case 7: $('.leftimage:last').css({ 'background-position-x': 0, 'background-position-y': -500 / 3 * 2 })
          break
        case 8: $('.leftimage:last').css({ 'background-position-x': -500 / 3, 'background-position-y': -500 / 3 * 2 })
          break
        case 9: $('.leftimage:last').css({ 'background-position-x': -500 / 3 * 2, 'background-position-y': -500 / 3 * 2 })
      }
    }
    if (typeofgame == 3) {
      switch (this.seat) {
        case 1: $('.leftimage:last').css('background-position-x', 0)
          break
        case 2: $('.leftimage:last').css('background-position-x', -500 / 4)
          break
        case 3: $('.leftimage:last').css('background-position-x', -500 / 4 * 2)
          break
        case 4: $('.leftimage:last').css('background-position-x', -500 / 4 * 3)
          break
        case 5: $('.leftimage:last').css({ 'background-position-x': 0, 'background-position-y': -500 / 4 })
          break
        case 6: $('.leftimage:last').css({ 'background-position-x': -500 / 4, 'background-position-y': -500 / 4 })
          break
        case 7: $('.leftimage:last').css({ 'background-position-x': -500 / 4 * 2, 'background-position-y': -500 / 4 })
          break
        case 8: $('.leftimage:last').css({ 'background-position-x': -500 / 4 * 3, 'background-position-y': -500 / 4 })
          break
        case 9: $('.leftimage:last').css({ 'background-position-x': 0, 'background-position-y': -500 / 4 * 2 })
          break
        case 10: $('.leftimage:last').css({ 'background-position-x': -500 / 4, 'background-position-y': -500 / 4 * 2 })
          break
        case 11: $('.leftimage:last').css({ 'background-position-x': -500 / 4 * 2, 'background-position-y': -500 / 4 * 2 })
          break
        case 12: $('.leftimage:last').css({ 'background-position-x': -500 / 4 * 3, 'background-position-y': -500 / 4 * 2 })
          break
        case 13: $('.leftimage:last').css({ 'background-position-x': 0, 'background-position-y': -500 / 4 * 3 })
          break
        case 14: $('.leftimage:last').css({ 'background-position-x': -500 / 4, 'background-position-y': -500 / 4 * 3 })
          break
        case 15: $('.leftimage:last').css({ 'background-position-x': -500 / 4 * 2, 'background-position-y': -500 / 4 * 3 })
          break
        case 16: $('.leftimage:last').css({ 'background-position-x': -500 / 4 * 3, 'background-position-y': -500 / 4 * 3 })
      }
    }
  }
  this.leftimagedata = function () {
    let seat = $('#puzzleDestination').children('.rightimage').length
    $('.rightimage:last').data('position', seat)
  }
}
function getvalue() {
  typeofgame = $('select').val()
  $('select').change(function () {
    typeofgame = $('select').val()
    if (typeofgame == 2) {
      $('#puzzle').empty()
      $('#puzzleDestination').empty()
      standar = 10
      standard = 3
      addcrush()
    }
    if (typeofgame == 3) {
      $('#puzzle').empty()
      $('#puzzleDestination').empty()
      standar = 17
      standard = 4
      addcrush()
    }
    if (typeofgame == 1) {
      $('#puzzle').empty()
      $('#puzzleDestination').empty()
      standar = 5
      standard = 2
      addcrush()
    }
  })
  if (typeofgame == 1) {
    $('#puzzle').empty()
    $('#puzzleDestination').empty()
    standar = 5
    standard = 2
    addcrush()
  }
}
function addcrush() {
  let temorayarry = new Array()
  let degarry = ['matrix(0, 1 , -1 , 0 , 0 , 0)', 'matrix(-1, 0 , 0 , -1 , 0 , 0)', 'matrix(0, -1 , 1 , 0 , 0 , 0)', 'matrix(1, 0 , 0 , 1 , 0 , 0)']
  for (let i = 1; i < standar; i++) {
    let blockofimage = 'blockofimage'
    blockofimage = blockofimage + i
    blockofimage = new leftimage(i)
    let L = Math.floor(Math.random() * standar)
    let deg = Math.floor(Math.random() * 4)
    $('.leftimage:last').css('transform', degarry[deg])
    if (L == 0) {
      L = L + 1
    }
    if (temorayarry[L] == L) {
      i = i - 1
      continue
    } else {
      if (temorayarry[L] == undefined) {
        temorayarry[L] = L
        blockofimage.seat = temorayarry[L]
      }
    }
    blockofimage.appenddiv()
  }
  timer()
}
function move() {
  let Temoray
  let long
  let positionoriginal
  let positioncopy
  let newtemorayarry
  $('#puzzle').on('mouseenter', '.leftimage', function () {
    Temoray = this
    console.log(Temoray)
  })

  $('#puzzle').on('dragstart', '.leftimage', function () {
    Temoray = this
    positionoriginal = $(this).data('position')
    console.log(positionoriginal)
  })
  $('#puzzleDestination,#puzzle,.positionPicture').on('dragover', function (ev) {
    ev.preventDefault()
  })
  $('#puzzleDestination').on('drop', '.rightimage', function () {
    long = $(this).children('div').length
    console.log(long)
    console.log(positionoriginal)
    if (long != 1) {
      long = $(this).data('position')
      console.log(long)
      console.log(positionoriginal)
      if (long === positionoriginal) {
        if ($(Temoray).css('transform') === 'matrix(1, 0, 0, 1, 0, 0)') {
          $(this).append(Temoray)
          $(Temoray).attr('dragable', 'false')
          Temoray = undefined
          console.log(Temoray)
          detection()
        }
      }
    }
  })
  $('#puzzle').on('mouseleave', '.leftimage', function () {
    Temoray = undefined
  })
  $(document).keydown(function () {
    console.log(Temoray)
    newtemorayarry = $(Temoray).css('transform')
    newtemorayarry = newtemorayarry.split('(')
    newtemorayarry = newtemorayarry[1].split(')')
    newtemorayarry = newtemorayarry[0].split(',')
    if (event.which == 39) {
      if (newtemorayarry[0] == 1) {
        $(Temoray).css('transform', 'matrix(0, 1 , -1 , 0 , 0 , 0)')
      }
      if (newtemorayarry[0] == 0 && newtemorayarry[1] == 1) {
        $(Temoray).css('transform', 'matrix(-1, 0 , 0 , -1 , 0 , 0)')
      }
      if (newtemorayarry[0] == -1) {
        $(Temoray).css('transform', 'matrix(0, -1 , 1 , 0 , 0 , 0)')
      }
      if (newtemorayarry[0] == 0 && newtemorayarry[1] == -1) {
        $(Temoray).css('transform', 'matrix(1, 0 , 0 , 1 , 0 , 0)')
      }
    }
    if (event.which == 37) {
      if (newtemorayarry[0] == 1) {
        $(Temoray).css('transform', 'matrix(0, -1 , 1 , 0 , 0 , 0)')
      }
      if (newtemorayarry[0] == 0 && newtemorayarry[1] == 1) {
        $(Temoray).css('transform', 'matrix(1, 0 , 0 , 1 , 0 , 0)')
      }
      if (newtemorayarry[0] == -1) {
        $(Temoray).css('transform', 'matrix(0, 1 , -1 , 0 , 0 , 0)')
      }
      if (newtemorayarry[0] == 0 && newtemorayarry[1] == -1) {
        $(Temoray).css('transform', 'matrix(-1, 0 , 0 , -1 , 0 , 0)')
      }
    }
  })
}
function timer() {
  let second_time = 0
  // console.log($('timer').children('span').split(':'))
  let minute_time = 0
  let time_meter
  let Temoray
  let degree = 0
  $('#begin').on('click', function () {
    time_meter = window.setInterval(function () {
      second_time = second_time + 1
      if (second_time > 60) {
        minute_time = minute_time + 1
        second_time = 0
      }
      $('#timer').children('span').html(minute_time + ':' + second_time)
      return time_meter
    }, 1000)
  })
  $('.buttons').on('click', '.btn-pause', function () {
    if (degree != 1) {
      clearInterval(time_meter)
      $('.btn-pause').before('<button class="btn Restarting_the_time">REstaring the time</button>')
      Temoray = this
      $('.btn-pause').remove()
      degree = degree + 1
      $('#puzzleContainer').css('display', 'none')
    }
  })
  $('.buttons').on('click', '.Restarting_the_time', function () {
    $('.Restarting_the_time').before(Temoray)
    Temoray = this
    $('.Restarting_the_time').remove()
    time_meter = setInterval(function () {
      second_time = second_time + 1
      if (second_time > 60) {
        minute_time = minute_time + 1
        second_time = 0
      }
      $('#timer').children('span').html(minute_time + ':' + second_time)
    }, 1000)
    $('#puzzleContainer').css('display', 'block')
  })
}
function clickevent() {
  $('.btn-start').click(function () {
    console.log(Temorayend)
  })
  $('#begin').click(function () {
    console.log(Temoraystart)
  })
}
$(document).ready(function () {
  clickevent()
  getvalue()
  move()
  restart()
})