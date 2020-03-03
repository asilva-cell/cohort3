import read_directory


def test_get_directory_size():
    assert read_directory.dir_size(
        '/home/adriana/code/cohort3/py-training/src/com200-basics') == 'There are 7 files in the directory, which has a total size of 4096 bytes.'
