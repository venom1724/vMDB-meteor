Template.add_actor.events({
    'submit form' : function (event, instance){
        event.preventDefault();
        var actorObj = {
            firstName: event.target["first-name"].value,
            lastName: event.target["last-name"].value,
            age: parseInt(event.target["age"].value),
            gender: Meteor.helpers.genderIdFromName(event.target["gender"].value)
        };
        //console.log(actorObj);
        Actors.insert(actorObj);
        $('.form').addClass("success");
        $('.form')[0].reset();
    }
});
