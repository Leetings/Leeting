package com.leeting.myapp.model;


public class ExerciseDto {

	private int no;

	private String maintitle;

	private String subtitle;

	private String date;

	
	public ExerciseDto() {

	}



	public ExerciseDto(int no, String maintitle, String subtitle, String date) {
		super();
        this.no = no;
        this.maintitle = maintitle;
        this.subtitle = subtitle;
        this.date = date;
	}



	public int getNo() {
		return no;
	}



	public void setNo(int no) {
		this.no = no;
	}



	public String getMaintitle() {
		return maintitle;
	}



	public void setMaintitle(String maintitle) {
		this.maintitle = maintitle;
	}



	public String getSubtitle() {
		return subtitle;
	}



	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	@Override
	public String toString() {
		return "ExerciseDto [no=" + no + ", maintitle=" + maintitle + ", subtitle=" + subtitle + ", date=" + date + "]";
	}


	
	
}
