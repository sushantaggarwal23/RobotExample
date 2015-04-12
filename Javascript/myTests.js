


test('init', function() {
		ok(!init('move'), 'first place command should be given');
		ok(!init('left'), 'first place command should be given');
		ok(!init('report'), 'first place command should be given');
		ok(init('place 0,0,north'), 'should activate towards north with coordinate x=0,y=0');
		ok(init('move'), 'will move towards North');
		ok(init('left'), 'will change direction towards left');
		ok(!init('move'), 'will try to move towards West but will return (false)');
		ok(init('right'), 'will change direction towards left');
		ok(init('right'), 'will change direction towards right');
		ok(init('move'), 'will move towards west');
		ok(init('place 2,2,east'), 'should activate towards east with co-ordinates x=2,y=2');
		ok(init('place 6,6,north'), 'should not activate towards north with coordinate x=6,y=6 and should return false for test condition');
		ok(!init('place 6,6,north'), 'should not activate towards north with coordinate x=6,y=6 and should return true for test condition');
		
});
