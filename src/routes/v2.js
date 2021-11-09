'use strict'

const express = require('express')
const bearer = require('../middleware/bearer')
const router = express.Router()
const acl = require('../middleware/acl')

router.post('/:model',bearer,acl('create'),(req,res)=>{
    res.status(200).send('img is created')
  })
  router.get('/:model',bearer,acl('read'),(req,res)=>{
    res.status(200).send('img is read')
  })
  router.put('/:model',bearer,acl('update'),(req,res)=>{
    res.status(200).send('img is updated')
  })
  router.delete('/:model',bearer,acl('delete'),(req,res)=>{
    res.status(200).send('img is deleted')
  })

  module.exports=router