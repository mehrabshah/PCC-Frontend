from django.db import models

# Create your models here.


class User(models.Model):
    USER_TYPE = [
        ("A", "Admin"),
        ("E", "Employer"),
        ("S", "Student"),
    ]
    UserType = models.CharField(max_length=10, choices=USER_TYPE)
    User_Name = models.CharField(max_length=20)
    User_Email = models.CharField(max_length=20)
    User_Age = models.IntegerField()
    User_Password = models.CharField(max_length=15)


class Test(models.Model):
    TEST_NAME = [
        ("M", "MB_IT"),
        ("N", "NEO-PI-R"),
        ("B", "BFI"),
    ]
    Test_Name = models.CharField(max_length=10, choices=TEST_NAME)
    User_Name = models.ForeignKey(User, on_delete=models.CASCADE)


class Profession(models.Model):
    PROF_List = [
        ("Dr", "Doctor"),
        ("P", "Pilot"),
        ("A", "Artist"),
        ("E", "Engineer"),
    ]
    Prof_Name = models.CharField(max_length=10, choices=PROF_List)
    User_Name = models.ForeignKey(User, on_delete=models.CASCADE)
    Test_Name = models.ForeignKey(Test, on_delete=models.CASCADE)


class Traits(models.Model):
    TRAITS_LIST = [
        ("C", "Creative"),
        ("A", "Adaptive"),
        ("B", "Balanced"),
        ("D", "Disciplined"),
    ]
    Traits_Name = models.CharField(max_length=10, choices=TRAITS_LIST)
    Prof_Name = models.ForeignKey(Profession, on_delete=models.CASCADE)
    User_Name = models.ForeignKey(User, on_delete=models.CASCADE)
    Test_Name = models.ForeignKey(Test, on_delete=models.CASCADE)


class JobPost(models.Model):
    JOB_TYPE = [
        ("Mr", "Marketing"),
        ("Hr", "HR"),
        ("AS", "Associate Software Engineer"),
    ]
    Job_Name = models.CharField(max_length=10, choices=JOB_TYPE)
    Job_Detail = models.TextField(blank=True)


class MatchingCandidate(models.Model):
    User_Name = models.ForeignKey(
        Traits, on_delete=models.CASCADE)  # get all detail of user
    Job_Name = models.ForeignKey(JobPost, on_delete=models.CASCADE)


class Feedback(models.Model):
    User_Name = models.ForeignKey(User, on_delete=models.CASCADE)
    FeedBack = models.TextField(blank=True)


class Feedback(models.Model):
    User_Name = models.ForeignKey(User, on_delete=models.CASCADE)
    FeedBack = models.TextField(blank=True)

# models
