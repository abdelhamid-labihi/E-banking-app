package ebankingbackend.entities;

import ebankingbackend.entities.ERole;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Enumerated(EnumType.STRING)
  @Column(length = 20)
  private ebankingbackend.entities.ERole name;

  public Role() {

  }

  public Role(ebankingbackend.entities.ERole name) {
    this.name = name;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public ebankingbackend.entities.ERole getName() {
    return name;
  }

  public void setName(ERole name) {
    this.name = name;
  }
}