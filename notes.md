## ideas
make an array of imageUrl for the campuses default value, and then set the default value to be a random index in the array
--(might have to do a setter)
-- look at how we did the stackchack newUsers
--make seed file
--make stateful containers that render dumb components
-- Ex: Stateful Campuses that pass down campuses to CampusList as a prop
-- look at juke
#Todo List:
    - autopopulating student edit forms dont work correctly
        - they usually populate the last student you got
        - try filtering currentStudents and pass that student as a prop?
    - when you edit a student from the campus, redirect back to that campus

        - use snackbar as confirmation that you created a new campus/student
    - make put request