def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

file_name = "input.txt"
arr = read_file(file_name).split("\n")
res = {}
arr.each do |move|
  change = move.split(" ")
  res[change[0]] ||= 0
  res[change[0]] += change[1].to_i
end
puts res['forward'] * (res['down'] - res['up'])