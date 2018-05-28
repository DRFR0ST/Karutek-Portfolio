'use strict';

var mongoose = require('mongoose'),
    Posts = mongoose.model('Posts');

let output = [],
    counter = 0;

exports.requestHandler = function(req, res) {
    var exec = req.body;

    counter = exec.length;

    for (var i = 0; i < exec.length; i++) 
        switch (exec[i][0]) {
            case "postList":
                postList(res, i);
                break;

            case 'postCreate':
                postCreate(exec[i], res, i);
                break;

            case "postRemove":
                postRemove(exec[i], res, i);
                break;

            default:
                response(res, "405", "Command not found!", null, i);
                break;
        }
};

function postCreate(data, res, id)
{
  var title = data[1].title,
      description = data[1].description,
      url = data[1].url,
      display = data[1].display,
      display_type = data[1]['display_type'];

  Posts.findOne({url: url}, function(post, err) {
    if(err)
      res.send(err);

    if(post != null) {
      response(res, "403", "Post with that url already exists!", null, id);
      return;
    }

    var post_data = new Posts({
      created: Date.now(),
      title: title,
      description: description,
      url: url,
      display: display,
      display_type: display_type
    });

    post_data.save(function(err) {
      if(err) 
        res.send(err);

      response(res, "204", "", null, id);
    });
  });
}

function postRemove(data, res, id)
{
  var url = data[1][0];

  Posts.findOne({url: url}, function(err, post) {
    if(err) {
      res.send(err);
      return;
    }

    if(post == null) {
      response(res, "404", "Data not found!", null, id);
      return;
    }

    post.remove(function(err, post) {
      if(err)
        res.send(err);

      response(res, "204", "", null, id);
    });
  });
}

function postList(res, id)
{
  Posts.find({}, {_id: false, __v:false}, function(err, post) {
    if(err) {
      res.send(err);
      return;
    }

    response(res, "200", "", post, id);
  });
}

function response(res, status, message, data, id) {
  output[id] = {"status": status, "message": message, "data": data, "reason": message};
  counter--;
  if (counter === 0) {
    res.json(output);
    output = [];
  }
}
